var tape = require('tape')
var ltgt = require('./')

var elements = [
  1, 2, 3, 4, 5
]

var ranges = [
  //default
  { range:
      {},
    selection:
      elements
  },
  { range:
      {reverse: true },
    selection:
      elements.slice().reverse()
  },

  //start/end - this has a lot of semantics because reverse is significant.
  { range:
      {start: 2},
    selection:
      [2, 3, 4, 5]
  },
  { range:
      {start: 2, reverse: true},
    selection:
      [2, 1]
  },
  { range:
      {end: 2},
    selection:
      [1, 2]
  },
  { range:
      {end: 2, reverse: true},
    selection:
      [2, 3, 4, 5].reverse()
  },
  { range:
      {start: 2.5},
    selection:
      [3, 4, 5]
  },
  { range:
      {start: 2.5, reverse: true},
    selection:
      [2, 1]
  },
  { range:
      {end: 2.5, reverse: true},
    selection:
      [5, 4, 3]
  },
  { range:
      {start: 5},
    selection:
      [5]
  },
  { range:
      {start: 5.5},
    selection:
      []
  },
  { range:
      {end: 0.5},
    selection:
      []
  },
  { range:
      {start: 5.5, reverse: true},
    selection:
      [5, 4, 3, 2, 1]
  },
  { range:
      {end: 0.5, reverse: true},
    selection:
      [5, 4, 3, 2, 1]
  },

  //lt/gt/lte/gte

  { range:
      {lt: 2.5},
    selection:
      [1, 2]
  },
  { range:
      {gt: 2.5},
    selection:
      [3, 4, 5]
  },
  { range:
      {lt: 2},
    selection:
      [1]
  },
  { range:
      {gt: 2},
    selection:
      [3, 4, 5]
  },

  { range:
      {lte: 2.5},
    selection:
      [1, 2]
  },
  { range:
      {gte: 2.5},
    selection:
      [3, 4, 5]
  },
  { range:
      {lte: 2},
    selection:
      [1, 2]
  },
  { range:
      {gte: 2},
    selection:
      [2, 3, 4, 5]
  },

  { range:
      {gt: 2.5, lt: 5},
    selection:
      [3, 4]
  },
  { range:
      {gte: 2, lt: 3.5},
    selection:
      [2, 3]
  },
  { range:
      {gt: 2.5, lte: 4},
    selection:
      [3, 4]
  },
  { range:
      {gte: 2, lte: 4},
    selection:
      [2, 3, 4]
  },

  //min/max - used by sublevel, equiv to gte, lte

  { range:
      {min: 2, max: 4},
    selection:
      [2, 3, 4]
  },

  { range:
      {max: 2.5},
    selection:
      [1, 2]
  },
  { range:
      {min: 2.5},
    selection:
      [3, 4, 5]
  },
  { range:
      {max: 2},
    selection:
      [1, 2]
  },
  { range:
      {min: 2},
    selection:
      [2, 3, 4, 5]
  }

]


function compare (a, b) {
  return a - b
}

ranges.forEach(function (e) {

  tape(JSON.stringify(e.range) + ' => '+ JSON.stringify(e.selection),
    function (t) {
      var actual = elements.filter(ltgt.filter(e.range, compare))
      if(e.range.reverse)
        actual.reverse()
      t.deepEqual(actual, e.selection)
      t.end()
    })
})
