# To convert a Wordpress blog to Markdown
# Export Wordpress into XML file (WP > Tools > Export)
# Generate Markdown for each post using wordpress-export-to-markdown
# Clean up each Markdown file afterwards

# delete YT links and captions
/\\\[caption/d
/\\\[\/caption\\\]/d

# preserve more tag
s/<!--more--> /\n\n<!--more-->\n\n/g

# change Wiki numbered list to Markdown, each on own line
s/ #/\n1. /g

# change nested list to separate lists
s/\* #/   1. /g
s/\\\*\\\*/\n   - /g

# change Wiki bullet list to Markdown
s/\\\*/\n- /g

# change indent to block quote
s/ :/\n> /g

# remove any backslashes
s/\\//g

# change }} to } and {{ to {
s|{{\([^\}]*\)}}|{\1}|g

# replace Wiki bold to Markdown bold
s/'''/**/g

# replace Wiki italic to Markdown italic
s/''/*/g

# change Wiki external links to Markdown links
#s'\[\([^\s]*\) \([^]]*\)\]'[\2](\1)'g
s'\[\(http[^\ ]*\) \([^]]*\)\]'[\2](\1)'g

# convert ==header== to ## header, for 4 levels
s/====\([^=]*\)====/#### \1\n/
s/===\([^=]*\)===/### \1\n/
s/==\([^=]*\)==/## \1\n/
s/=\([^=]*\)=/# \1\n/

# clean up some spurious white space and backslashes
s/^ //