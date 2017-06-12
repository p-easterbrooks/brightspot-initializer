class Blitz < Formula
  desc "Brightspot Server Installation Tool"
  homepage "https://github.com/p-easterbrooks/blitz"
  url "https://github.com/p-easterbrooks/blitz/archive/v0.5.2.tar.gz"
  version "0.5.2"
  sha256 "e3f005a8bbb2813f0112e18bd3f88a0be226b74ba7059e10917cfdaf17c58cc0"

  def install
    bin.install "blitz"
  end
end
