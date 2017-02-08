define([
    'jquery',
    'bsp-utils',
    'codemirror/lib/codemirror',
    'codemirror/mode/clike/clike',
    'codemirror/mode/xml/xml',
    'codemirror/mode/javascript/javascript',
    'codemirror/mode/css/css',
    'codemirror/mode/htmlmixed/htmlmixed',
    'codemirror/mode/htmlembedded/htmlembedded' ],
    
function($, bsp_utils, CodeMirror) {
    var $win = $(window);
    var $inputs = $();
    var mirrors = [ ];

    bsp_utils.onDomInsert(document, 'textarea[data-code-type]', {
        'insert': function(input) {
            $inputs = $inputs.add($(input));
        }
    });

    setInterval(function() {
        $inputs.each(function() {
            var $input = $(this),
                    mirror;

            if ($input.is(':visible')) {
                $inputs = $inputs.not($input);

                mirror = CodeMirror.fromTextArea(this, {
                    'indentUnit': 4,
                    'lineNumbers': true,
                    'lineWrapping': true,
                    'mode': $input.attr('data-code-type')
                });

                mirror.on('change', function() {
                    $input.closest('.inputContainer').scrollTop(0);
                    $input.val(mirror.getValue());
                    $input.change();
                });

                mirrors.push(mirror);
            }
        });
    }, 100);

    $win.resize(function() {
        $.each(mirrors, function(i, mirror) {
            mirror.refresh();
        });
    });
});
