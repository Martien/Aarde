/^---/ {
    found++;
}
/^title: / {
    gsub(/["\047]/, "");
    title = $0;
}
/^date: / {
    gsub(/["\047]/, "");
    date = $0;
}
{
    print
}
found >= 2 {
    print "\n# " substr(title, 8) "\n### " substr(date, 7);
    found = 0
}