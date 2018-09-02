require 'test_helper'

class TrainingsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get trainings_new_url
    assert_response :success
  end

  test "should get edit" do
    get trainings_edit_url
    assert_response :success
  end

end
