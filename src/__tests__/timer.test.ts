
import time from "../components/time";

test('time test', () => {

  expect(time(60)).toBe("01:00");
});