define([
    'jquery',
    'bsp-utils' ],

function($, bsp_utils) {
    var $frames;
    var $fields = $();

    bsp_utils.onDomInsert(document, '.queryField', {
        'insert': function(field) {
            var $field = $(field);
            var inputValue = $field.find('input').val();
            var search;
            var $body = $(window.document.body);
            var $frame;

            $fields = $fields.add($field);

            if (!$frames) {
                $frames = $('<div/>', {
                    'class': 'queryField_frames'
                });

                $(window.document.body).append($frames);
            }

            search = inputValue ? JSON.parse(inputValue)['cms.ui.search'] : null;
            search = search ? search : { 'limit': 10 };
            var types = $field.closest('.inputLarge').attr('data-generic-arguments');
            search.types = types ? types.split('\\s*,\\s*') : null;

            $frame = $('<div/>', {
                'class': 'frame',
                'html': $('<form/>', {
                    'method': 'post',
                    'action': CONTEXT_PATH + '/queryField',
                    'html': [
                        $('<input/>', {
                            'type': 'hidden',
                            'name': 'containerObjectId',
                            'value': $field.closest('form').attr('data-content-id')
                        }),

                        $('<input/>', {
                            'type': 'hidden',
                            'name': 'search',
                            'value': search ? JSON.stringify(search) : ''
                        })
                    ]
                })
            });

            $.data($field[0], 'query-$frame', $frame);
            $.data($frame[0], 'query-$field', $field);
        }
    });

    setInterval(function() {
        function inNonInitializedRepeatable($field) {
            var $repeatable = $field.closest('.repeatableForm, .repeatableInputs, .repeatableLayout, .repeatableObjectId, .repeatableText');

            return $repeatable.length > 0 && !$repeatable.is('.plugin-repeatable');
        }

        $fields.filter(':visible').each(function() {
            var $field = $(this);

            if (inNonInitializedRepeatable($field)) {
                return;
            }

            var $positionedParent;

            $.each($field.parents().toArray().reverse(), function(i, parent) {
                var $parent = $(parent);
                var position = $parent.css('position');

                if (position !== '' && position !== 'static') {
                    $positionedParent = $parent;
                    return false;
                }
            });

            var $frame = $.data($field[0], 'query-$frame');
            var fieldOffset = $field.offset();

            if ($frame.closest('.queryField_frames').length === 0) {
                $frames.append($frame);
                $frames.trigger('create');
            }

            $frame.css({
                'left': fieldOffset.left,
                'position': 'absolute',
                'top': fieldOffset.top,
                'z-index': ($positionedParent ? parseInt($positionedParent.css('z-index'), 10) || 0 : 0) + 1
            });

            $frame.outerWidth($field.outerWidth());
            $field.outerHeight($frame.outerHeight());
            $frame.show();
        });

        $fields.filter(':not(:visible)').each(function() {
            var $field = $(this);

            if (inNonInitializedRepeatable($field)) {
                return;
            }

            var $frame = $.data($field[0], 'query-$frame');

            if ($frame && $frame.closest('.queryField_frames').length > 0) {
                $frame.hide();
            }
        });

        $('.queryField_frames > .frame').each(function() {
            var $field = $.data(this, 'query-$field');

            if (inNonInitializedRepeatable($field)) {
                return;
            }

            if (!$field || !$field.is(':visible')) {
                $(this).hide();
            }
        });
    }, 100);
});
