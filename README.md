<p align="center">
  <a href="">
    <img alt="Perf Track" title="Perf Track" src="https://i.imgur.com/Yl8UEWJ.png" width="400">
  </a>
</p>

**Perf Track** is a project that aims to track and measure the performance of sites that use popular JavaScript frameworks and libraries. It is not an exercise to compare the performance of frameworks against each other.

## FAQ

**Where is the data sourced from?**

[HTTP Archive](https://httparchive.org/) and the [Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report).

**Can this data tell me which frameworks are faster and more performant than others?**

Perf Track aggregates results for certain frameworks. Conclusions **cannot** be drawn on the performance of a particular framework just by using this data.

**How can I understand this data better?**

Take a look at the ["About"](https://perf-track.web.app/about) page, which goes into more detail about the methodology and data behind Perf Track.

**Something looks wrong, can I open an issue?**

Yes please!

**Can I contribute?**

We would love all kinds of contributions! Some high priority items at the moment:

* Using BigQuery's API to fetch previously queried results instead of locally storing them in JSON files
* Improving how Wappalyzer detects frameworks and libraries
* Including more data that can be useful

Please take a look at [CONTRIBUTING.md](./CONTRIBUTING.md).
