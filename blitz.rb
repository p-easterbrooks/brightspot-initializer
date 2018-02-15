class Blitz < Formula
  desc "Brightspot Server Installation Tool"
  homepage "https://github.com/p-easterbrooks/blitz"
  url "https://github.com/p-easterbrooks/blitz/archive/v0.6.tar.gz"
  version "0.6"
  sha256 "ace7ad3b141202c5d4187cc0311504a60820c3b331e6833ac98291d4ec5239a6"

  def install
    bin.install "blitz"
  end
end
