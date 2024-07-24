# Use the official TeX Live image as the base image
FROM texlive/texlive:latest

# Install latexmk and the desired font package
RUN tlmgr install latexmk 
RUN tlmgr show merriweather 

# CMD ["/bin/sh"]