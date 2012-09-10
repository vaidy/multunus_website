---
comments: true
layout: post
title: Simple Image Filter using OpenGL ES in Android
wordpress_id: 1773
wordpress_url: http://www.multunus.com/?p=1773
date: 2011-10-07 15:35:45.000000000 +05:30
author: Tamil
---
<em><strong>Note</strong>: This post assumes some basic knowledge in setting up an OpenGL app in Android. A basic example for rendering a texture on to a surface can be found <a href="http://developer.android.com/resources/samples/ApiDemos/src/com/example/android/apis/graphics/GLES20TriangleRenderer.html">here.</a> You can use this as the initial setup for trying out Shader language program listed in this post.</em>

OpenGL is widely adopted as the graphics API of choice for real-time interactive 3D graphics applications. OpenGL is easy to understand, but its simplicity and orthogonality enable many interesting possibilities. One such possibility is image processing.

<!-- more -->

Using "OpenGL" for Image Processing enables us to completely utilize the power of Graphics Processing Unit (GPU) hence the image processing will be faster also it reduces the load on CPU. This can be crucial for Image processing applications, especially in mobile environment where the resources available are relatively lesser.

In this post we will be discussing how to use OpenGL Shader Language to manipulate pixels and create Image filter effects.

<a rel="attachment wp-att-1851" href="http://www.multunus.com/2011/10/simple-image-filter-using-opengl-es-in-android/combined/"><img class="aligncenter size-medium wp-image-1851" src="http://www.multunus.com/wp-blog/wp-content/uploads/2011/10/combined-300x250.png" alt="" width="300" height="250" /></a>

As with any OpenGL app, we will start with setting up the view.

The next step is to load an image into the texture, This texture can be mapped on to the surface of a square, which will then be drawn on to the screen.For Image processing, we will require only 2 dimensions so we will set up the view in orthographic projection and will also discard z axis by keeping it to 0.0 most of the times.

But before drawing to the screen, there are many intermediate operations that are done by the graphics hardware, which are now directly programmable in OpenGL ES 2.0 using Shader Language (GLSL).
We will be concentrating on Vertex and Fragment processing phases in OpenGL pipeline. We will go through a simple fragment shader program and will explain how it works. Both of these programs are written in GLSL. GLSL is a ‘C’ like language which gives direct control over the  graphics pipeline without having to use assembly language or hardware-specific languages.

<strong>Vertex shader</strong>

[sourcecode language="c"]
uniform mat4 uMVPMatrix;
attribute vec4 aPosition;
attribute vec2 aTextureCoord;
varying vec2 vTextureCoord;
void main() {
  gl_Position = uMVPMatrix * aPosition
  vTextureCoord = aTextureCoord
}
[/sourcecode]
<p dir="ltr">The Vertex shader is executed for each vertex that is to be drawn. Here, we are drawing a square and mapping the texture on to that.</p>
This calculates the transformed coordinates of the square by multiplying the given coordinates with <a href="http://en.wikibooks.org/wiki/OpenGL_Programming/3D/Matrices" target="_blank">MVPMatrix</a> [ MVP -  Model * View * Projection ]. Other than this we are also storing corresponding texture co-ordinates in variable '<em>vTextureCoords'</em> so that it is available in the fragment shader.

<strong>Fragment Shader</strong>

[sourcecode language="c"]
precision mediump float;
varying vec2 vTextureCoord;
uniform sampler2D sTexture;
void main() {
   vec2 cen = vec2(0.5,0.5) - vTextureCoord.xy;
   vec2 mcen = -0.07*log(length(cen))*normalize(cen);
   gl_FragColor = texture2D(sTexture, vTextureCoord.xy-mcen);
}
[/sourcecode]
<p dir="ltr"></p>
Fragment shaders are executed to calculate the color of individual pixels. This is where the actual image transformation happens. Instead of mapping the corresponding texture coordinates to corresponding pixels, we can map different coordinates of the texture to different pixels which will distort the image in some way. In the above example the texture co-ordinate to fill each pixel is chosen based on the calculation in line no 6. The actual movement depends on the distance of the texture coordinate from the center. This creates an effect which is similar to what is shown in the below picture.

Although this is a very simple effect, the intention here is to just show potential applications of OpenGL in Android apps.
