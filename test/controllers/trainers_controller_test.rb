require 'test_helper'

class TrainersControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get edit_trainer_url
    assert_response :success
  end

end
