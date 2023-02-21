# InternetSpeedNotifier

[![Rust](https://github.com/Rubber-Duck-999/InternetSpeedNotifier/actions/workflows/rust.yml/badge.svg?branch=main)](https://github.com/Rubber-Duck-999/InternetSpeedNotifier/actions/workflows/rust.yml)

Application that updates gpio LEDs from speedtest

Meant to be run on raspberry pi with this hardware

## Install

Switching to rust

`cargo build`

## Blinkt

Uses this led array to show internet speed

<img src="blinkt.png" alt="drawiPimoroni Blinkt" width="200"/>

[Link](https://shop.pimoroni.com/products/blinkt?variant=22408658695)


## Testing

`cd tests`
`cargo test`

## Logging

Logging to a file under user on linux

`/home/{user}/sync/InternetSpeedNotifier.log`

Im using this as Im using this folder to sync multiple devices
