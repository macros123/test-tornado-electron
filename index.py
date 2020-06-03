import tornado.web
import tornado.ioloop
import json

data = {"name": "Sergei", "age": 25, "isLookingForJob": True}

class basicRequestHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(json.dumps(data))

if __name__ == "__main__":
    app = tornado.web.Application([
        (r"/", basicRequestHandler)
    ])

    app.listen(8881)
    print("I'm listening on port 8881")
    tornado.ioloop.IOLoop.current().start()