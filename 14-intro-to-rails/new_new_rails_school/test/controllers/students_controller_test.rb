require 'test_helper'

class StudentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get students_index_url
    assert_response :success
  end

end
