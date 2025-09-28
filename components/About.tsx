export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary-600">SC</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate software developer with a love for creating innovative solutions 
                and beautiful user experiences. With expertise in modern web technologies, I enjoy 
                turning complex problems into simple, elegant solutions.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying up-to-date with the latest industry trends.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Problem Solver
                </div>
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Team Player
                </div>
                <div className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Lifelong Learner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
