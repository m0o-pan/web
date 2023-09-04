  const fireR = () => {
      let a = 0
      return () => {
        if (++a === 2) {
          console.log('really in ')

          const dg = new Function('debugger')
          setTimeout(() => {
            dg()
            location.href = 'about:blank'
          }, 0)
          a = 1
        }
      }
    }

    const errorDetector = () => {
      const e = new Error()
      let i = 0
      const c = fireR()

      Object.defineProperty(e, 'message', {
        get () {
          console.log('控制台打开', i++, new Date())
          c()
          //
        }
      })
      console.log(e)
    }
    errorDetector()
