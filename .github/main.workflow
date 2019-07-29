workflow "Build, Test and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "nuxt/actions-yarn@master"
  args = "build"
  secrets = ["GH_TOKEN"]
}

action "Test" {
  needs = "Build"
  uses = "nuxt/actions-yarn@master"
  args = "test"
}

action "Tag" {
  needs = "Test"
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "Deploy" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Tag"]
  args = "deploy-ident"
  secrets = ["GH_TOKEN"]
}