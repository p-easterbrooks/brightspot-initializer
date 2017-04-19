class Installer < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/homebrew-brightspot-initializer"
  url "https://github.com/p-easterbrooks/homebrew-brightspot-initializer/archive/v0.2.1.tar.gz"
  version "0.2.1"
  sha256 "d37f83c5e7a8e4d9cb88027fc95a14d8ba3fbdb7fd8425523758501858bfec12"

  def install
    bin.install "bsit"
  end
end
