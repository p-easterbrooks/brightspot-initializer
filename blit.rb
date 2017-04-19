class BLIT < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/blit"
  url "https://github.com/p-easterbrooks/blit/archive/v0.1.tar.gz"
  version "0.1"
  sha256 "12b32c0e2239c22aee6b612def99231d40e3157b6d6ed6bbc0855cfae817857e"

  def install
    bin.install "blit"
  end
end
