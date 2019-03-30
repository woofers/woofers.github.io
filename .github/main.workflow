workflow "Build, Test and Deploy" {
  on = "push"
  resolves = ["nuxt/actions-yarn@master"]
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
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
  args = "deploy"
  secrets = ["GITHUB_TOKEN"]
}
