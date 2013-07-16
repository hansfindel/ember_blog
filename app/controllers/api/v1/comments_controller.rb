class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
   
  respond_to :json

  #GET
  def index
    respond_with Comment.all
  end

  # GET
  def show
  	respond_with @comment
  end
  # get -- not necesary for apis
  #def new
  #end
  #def edit
  #end

  # POST
  def create
    #sleep 1
    @comment = Comment.new(comment_params)
    @comment.save
    #sleep 1
    respond_with @comment
  end

  # PATCH/PUT 
  def update
    @comment.update(update_comment_params)
    respond_with @comment
  end

  # DELETE
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
    def update_comment_params
      params.require(:comment).permit(:description)
    end
end
