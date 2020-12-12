import benchmark from "benchmark";
import { sponsor } from "../../src";

export function run(suite: benchmark.Suite, options: benchmark.Options) {
  suite.add("sponsor#fn", () => sponsor("", "TestApp", "abc"));

  suite
    .on("cycle", function (event: benchmark.Event) {
      console.log(String(event.target));
    })
    .on("complete", function (this: benchmark.Suite) {
      console.log("end");
    });

  suite.run(options);
}
