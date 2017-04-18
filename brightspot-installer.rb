class Brightspot_Installer < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/homebrew-brightspot-initializer"
  url "https://github.com/p-easterbrooks/homebrew-brightspot-initializer/archive/v0.1.tar.gz"
  version "0.1"
  sha256 "5465691d565088494ea44ac67ceb58d953ee25464bf0ff7f60bf6a465a65a0ee"

  def install
    bin.install "bsp-install"
  end
end