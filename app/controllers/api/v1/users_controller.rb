class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
   
  respond_to :json

  # GET 
  def index
    respond_with User.all
  end

  # GET /users/1.json
  def show
    if @blog
    	respond_with @user
    else
      respond_with json: {status: 404, text: "No user entry found with that id"}
    end
  end

  # GET
  #def new    
  #end
  #def edit
  #end

  # POST /users.json
  def create
    #sleep 1
    @user = User.new(user_params)
    @user.save
    #sleep 1
    respond_with @user
  end

  # PATCH/PUT /users/1.json
  def update
    @user.update(user_params)
    respond_with @user
  end

  # DELETE /users/1.json
  def destroy
    respond_with @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by_id(params[:id]) 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
