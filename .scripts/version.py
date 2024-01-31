import toml
import sys

# Parse the pack.toml
pack = toml.load(sys.argv[1])

# change version to the second argument
pack["version"] = sys.argv[2]

#Dump the file back out
with open(sys.argv[1],"w") as f:
	toml.dump(pack,f)
