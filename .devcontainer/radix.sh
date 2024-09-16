LATEST_VERSION=1.20.1

rx_tar=radix-cli_${LATEST_VERSION}_Linux_arm64.tar.gz
curl -OL "https://github.com/equinor/radix-cli/releases/download/v${LATEST_VERSION}/${rx_tar}"
tar -xf ${rx_tar}

sudo mv rx /usr/local/bin/rx
sudo mv README.md ./docs/RADIX.md
rm ${rx_tar}