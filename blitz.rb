class Blitz < Formula
  desc "Brightspot Server Installation Tool"
  homepage "https://github.com/p-easterbrooks/blitz"
  url "https://github.com/p-easterbrooks/blitz/archive/v0.5.1.tar.gz"
  version "0.5.1"
  sha256 "67381dbc45b48df46e90c32f4a8700cae8ee86d67b215ee3818e15b5001978ea"

  def install
    bin.install "blitz"
  end
end
