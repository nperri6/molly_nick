Aws.config.update({
  region: 'us-west-2',
  credentials: Aws::Credentials.new(ENV['MOLLY_NICK_AWS_ACCESS_KEY_ID'], ENV['MOLLY_NICK_AWS_SECRET_ACCESS_KEY']),
})

S3_BUCKET = Aws::S3::Resource.new.bucket(ENV['MOLLY_NICK_S3_BUCKET'])
