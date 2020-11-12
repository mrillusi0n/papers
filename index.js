const header = document.querySelector('.header')
const cta = document.querySelector('.cta')
const papers = document.querySelector('.papers')

papers.addEventListener('click', (e) => {
	paper = e.target

	for (const p of papers.children) {
		if (p != paper)
			p.classList.toggle('paper--out')
	}

	paper.classList.toggle('paper--selected')
	header.classList.toggle('header--out')
	cta.classList.toggle('cta--out')

	paper.classList.remove('paper--hovered')
})

for (const paper of papers.children) {
	paper.addEventListener('mouseenter', (_) => {
		if (paper.classList.contains('paper--selected'))
			return

		paper.classList.add('paper--hovered')
	})

	paper.addEventListener('mouseleave', (_) => {
		if (paper.classList.contains('paper--selected'))
			return

		paper.classList.remove('paper--hovered')
	})
}
