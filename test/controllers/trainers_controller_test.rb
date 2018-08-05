require 'test_helper'

class TrainersControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get trainers_edit_url
    assert_response :success
  end

end
