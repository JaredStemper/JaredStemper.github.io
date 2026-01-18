# Jared Stemper

Static website for Jared! Contains the LaTeX and Github workflows used to build and compose website and resume.


**Serve site locally:**
- Using Docker Compose:
```bash
docker-compose up --build
```
The site will be available at http://localhost (port 80).

**Build/Update resume locally:**
```bash
./resume/latex_build.sh
```

PDF output is written to `resume/build`. If website is running you can access the resume at `http://localhost/JaredStemper_Resume.pdf`.

For GitHub Pages setup and deployment, look to the .github/workflows and see official [GitHub documentation](https://docs.github.com/en/pages).

To develop resume either use the `latex_build` script above or copy thed `./resume/resume.cls` and `./resume/JaredStemper_Resume.tex` files into [Overleaf](https://www.overleaf.com/) which is great for building LaTeX online.