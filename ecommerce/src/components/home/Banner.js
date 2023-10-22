export default function Example() {
    return (
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                ¡Diciembre en Noviembre: Descuentos Moto Divertidos! 🏍️🎉
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                ¡Desde ya se siente diciembre! Prepara tu moto para las festividades con descuentos en repuestos y accesorios solo en MotoSpits. Calidad garantizada, envío rápido y asesoramiento experto te esperan. ¡Mantén tu moto en su mejor forma y prepárate para unas navidades llenas de emociones! 🏍️💨🎄
                </p>
              </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_973822-MLU71580227898_092023-F.webp"
                            alt="Aceite Repsol"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_623521-MCO47951280532_102021-F.webp"
                            alt="Barras de suspension"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_940521-MCO71635109274_092023-F.webp"
                            alt="Bujias"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_868241-MCO44358226567_122020-F.webp"
                            alt="Kit de arrastre cassarella"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_747210-MCO44172916376_112020-F.webp"
                            alt="Kit delantero nkd"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_672877-MLU70794469184_082023-F.webp"
                            alt="Llantas Diablo Rosso III"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://http2.mlstatic.com/D_NQ_NP_2X_653472-MCO50825449659_072022-F.webp"
                            alt="Farola NS 200"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/shop"
                  className="inline-block text-center bg-custom-blue border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-custom-hover-blue"
                >
                  Compra Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }