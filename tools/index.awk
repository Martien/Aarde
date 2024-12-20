# for i in *.md { awk -f index.awk "${i}" > "../index/${i}"; }
/^---$/ {
	meta++
}
meta == 2 {
	print "index: true"
	meta = 0
}
1 {print}
