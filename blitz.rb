class Blitz < Formula
  desc "Brightspot Server Installation Tool"
  homepage "https://github.com/p-easterbrooks/blitz"
  url "https://github.com/p-easterbrooks/blitz/archive/v0.5.tar.gz"
  version "0.5"
  sha256 "2156da4bdb331a0f07151cca9d15a1cccaabc7f9a4fbdeee93d32d747e4d7a5b"

  def install
    bin.install "blitz"
  end
end
