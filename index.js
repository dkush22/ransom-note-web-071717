function buildHistogram(array) {
	let histogram = {}
for (let i = 0; i < array.length; i++) {
	if (!histogram[array[i]]) {
		histogram[array[i]] = 1
	} else {
		histogram[array[i]] += 1
	}
}
return histogram
}

function canBuildNote(note, array) {
let keyed = buildHistogram(array)
for (let i = 0; i < note.length; i++) {
	if (!keyed[note[i]] || keyed[note[i]] === 0) {
		return false
	} else {
		keyed[note[i]] -= 1
	}
}
return true
}