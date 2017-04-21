class Blit < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/blit"
  url "https://github.com/p-easterbrooks/blit/archive/v0.3.tar.gz"
  version "0.3"
  sha256 "88e6c2fd545a4ede9fbe6eed473cf9843e63ce056be6bc305d452e1398c55836"

  def install
    bin.install "blit"
  end
end
