### Prerequisites

- yarn
- detox-cli
- Android Studio (for emulator)

### Installation

`yarn install`

### Build

`detox build -c android`

### Create an emulator

Create an android emulator named `pixel_9.0` or rename the avdName in `.detoxrc.json` with an existing one

### Test

`detox test -c android`

### Problem

Test is executed but it doesn't finish up. Jest timeout is exceeded and then test is finished with success. Logging `INFO: [APP_STATUS] The app seems to be idle` until timeout. You can increase the timeout (currently, 40 sec) to see more logging

```
ERROR: Exceeded timeout of 40000ms while handling jest-circus "test_done" event
INFO:  Example: should have welcome screen [OK]
ERROR: Exceeded timeout of 40000ms while handling jest-circus "test_done" event
```

It is suppose to finish up the test case once the end of test is reached
