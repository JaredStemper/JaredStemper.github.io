#!/usr/bin/env bash
set -euo pipefail

# point to relative repo root regardless of where script is called
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
repo_root="$(cd "$script_dir/.." && pwd)"

docker build "$repo_root" --file "$repo_root/resume/Dockerfile" --tag latexbuild

resume_dir="$repo_root/resume"
assets_dir="$repo_root/assets/resume"

# output build to host
mkdir -p "$resume_dir/build"
docker run --rm \
	-v "$resume_dir":/input \
	-v "$resume_dir":/output \
	-v "$assets_dir":/assets \
	latexbuild

echo "Build finished. Enjoy your new resume at $resume_dir/build and have just a heck of a day over there"