# Use the official TeX Live image as the base image
FROM texlive/texlive:latest

# Install latexmk and the desired font package
RUN tlmgr install latexmk merriweather

# Set the working directory
WORKDIR /workspace

# # Copy LaTeX files into the container
# COPY resume/ /workspace

# Create volumes for input and output
VOLUME ["/input", "/output"]

# Compile the LaTeX document using latexmk
CMD ["latexmk", "-pdf", "/input/JaredStemper_Resume.tex", "-output-directory=/output"]
