class Blitz < Formula
  desc "Brightspot Server Installation Tool"
  homepage "https://github.com/p-easterbrooks/blitz"
  url "https://github.com/p-easterbrooks/blitz/archive/v0.4.tar.gz"
  version "0.4"
  sha256 "b3b53b0fd3d0e46247e06fda0976959130d8678de27076bc55065e12675f221d"

  def install
    bin.install "blitz"
  end
end
