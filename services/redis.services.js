const { createClient }= require('@redis/client')
const redisURL= process.env.EDU_REDIS_LIVE

exports.redisClient= createClient({
    url : redisURL
})
