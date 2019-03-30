workflow "Build, Test and Deploy" {
  on = "push"
  resolves = ["nuxt/actions-yarn@master"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "build"
}

action "Test" {
  needs = "Build"
  uses = "nuxt/actions-yarn@master"
  args = "test"
}

# Filter for a new tag
action "Tag" {
  needs = "Test"
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "nuxt/actions-yarn@master" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Tag"]
  args = "run gh-pages -d public -b master -u 'Jaxson Van Doorn <woofers1tt@gmail.com>'"
  secrets = ["GITHUB_TOKEN"]
}
