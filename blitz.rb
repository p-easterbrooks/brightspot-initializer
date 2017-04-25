class Blitz < Formula
  desc "Brightspot Server Installation Tool"
  homepage "https://github.com/p-easterbrooks/blitz"
  url "https://github.com/p-easterbrooks/blitz/archive/v0.3.tar.gz"
  version "0.3"
  sha256 "6ab3d2ced5ade186acb729a5605b0caae1f49782780a39171b49805fca57f458"

  def install
    bin.install "blitz"
  end
end
