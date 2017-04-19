class Installer < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/homebrew-brightspot-initializer"
  url "https://github.com/p-easterbrooks/homebrew-brightspot-initializer/archive/v0.2.tar.gz"
  version "0.2"
  sha256 "0ee1ebe6b028e733e45318b07384a5aad3e97b74ebe83bb66fec6b50884de32c"

  def install
    bin.install "bsit"
  end
end
