# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
      # The class BlogPostController inherits the method of ApplicationController.
class BlogPostsController < ApplicationController
  def index

# ---2)
      # All of the information of BlogPost is assigned to the variable @posts.
    @posts = BlogPost.all
  end

  def show
# ---3)
      # The .find searches in BlogPost for a particular id parameter and is assigned to @post.
    @post = BlogPost.find(params[:id])
  end

# ---4)
      # A new object is instantiated and assigned.
  def new
    @post = BlogPost.new
  end

  def create

  # ---5)
      # Creates an object with required set of parameters and is assigned to the variable @post.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

# ---6)
      # It finds a set of parametetrs that are to be edited and assigned to @post.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

# ---7)
      # It updates a set of parameters and assignes it to @post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
# ---8) 
      # It redirects the route of the blog post to @post
      redirect_to blog_post_path(@post)
    end
  end

# ---9)
      # It sets the blog post parameters to private.
  private
  def blog_post_params

# ---10)
      # The parameters requires the argument blog_post to returm back the values of title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
