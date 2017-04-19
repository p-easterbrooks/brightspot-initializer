class Install < Formula
  desc "Brightspot Server Installer"
  homepage "https://github.com/p-easterbrooks/blit"
  url "https://github.com/p-easterbrooks/blit/archive/v0.2.2.tar.gz"
  version "0.2.2"
  sha256 "8244b718846244d0f0e2dbc80840bb6135d4df31ef8c4c999875895681a311ea"

  def install
    bin.install "blit"
  end
end
