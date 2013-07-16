class Api::V1::BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :edit, :update, :destroy]
   
  respond_to :json

  # GET /tables
  # GET /tables.json
  def index
    respond_with Blog.all#, Comment.all
  end

  # GET /tables/1
  # GET /tables/1.json
  def show
    if @blog
    	respond_with @blog#, @blog.comments
    else
      respond_with json: {status: 404, text: "No blog entry found with that id"}
    end
  end

  # GET /tables/new
  def new
    #respond_with Table.new
  end

  # GET /tables/1/edit
  def edit
  end

  # POST /tables
  # POST /tables.json
  def create
    #sleep 1
    @blog = Blog.new(blog_params)
    @blog.save
    #sleep 1
    respond_with @blog
  end

  # PATCH/PUT /tables/1
  # PATCH/PUT /tables/1.json
  def update
    @blog.update(blog_params)
    respond_with @blog
  end

  # DELETE /tables/1
  # DELETE /tables/1.json
  def destroy
    respond_with @blog.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog
      @blog = Blog.find_by_id(params[:id]) 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_params
      params.require(:blog).permit(:title, :explanation, :description)
    end
end
