export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-primary-600">Sergio Iván</span>
            <br />
            Chávez Hernández
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate software developer creating digital experiences that make a difference
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              View My Work
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="w-16 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-gray-500">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
