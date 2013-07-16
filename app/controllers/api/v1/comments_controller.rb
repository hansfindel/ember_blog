class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
   
  respond_to :json

  # GET /tables
  # GET /tables.json
  def index
    respond_with Comment.all
  end

  # GET /tables/1
  # GET /tables/1.json
  def show
  	respond_with @comment
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
    @comment = Comment.new(comment_params)
    @comment.save
    #sleep 1
    respond_with @comment
  end

  # PATCH/PUT /tables/1
  # PATCH/PUT /tables/1.json
  def update
    @comment.update(comment_params)
    respond_with @comment
  end

  # DELETE /tables/1
  # DELETE /tables/1.json
  def destroy
    respond_with @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:description, :blog_id)
    end
end
