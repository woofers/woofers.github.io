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

action "Deploy" {
  uses = "JamesIves/github-pages-deploy-action@master"
  needs = ["Tag"]
  args = "deploy"
  env = {
    BRANCH = "master"
    BASE_BRANCH = "development"
    BUILD_SCRIPT = "echo 'Deploying...'"
    FOLDER = "public"
    CNAME = "jaxson.vandoorn.ca"
    COMMIT_EMAIL = "woofers1tt@gmail.com"
    COMMIT_NAME = "Jaxson Van Doorn"
  }
  secrets = [
    "GITHUB_TOKEN",
    "ACCESS_TOKEN",
  ]
}
