class Installer < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/homebrew-brightspot-initializer"
  url "https://github.com/p-easterbrooks/homebrew-brightspot-initializer/archive/v0.1.tar.gz"
  version "0.1"
  sha256 "980dc381d0b82851266c2972eedb6ddcf2611f82cc70ee1ceb3daec200ce1353"

  def install
    bin.install "bsp-install"
  end
end