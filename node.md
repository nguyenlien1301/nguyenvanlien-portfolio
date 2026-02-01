<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex"
            >
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-none flex-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 shrink-0"
                    width={300}
                    height={300}
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 left-2 dark:bg-white z-10">
                      Featured
                    </Badge>
                  )}
                  {project.createdAt && (
                    <Badge className="absolute top-2 left-24 dark:bg-white z-10">
                      Mới
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors dark:text-white">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-transparent rounded-full border border-blue-500! text-sm font-medium shadow-[0_0_8px_var(--color-blue-500)] text-blue-500 dark:text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge className="bg-transparent rounded-full border border-blue-500! text-sm font-medium shadow-[0_0_8px_var(--color-blue-500)] text-blue-500 dark:text-white">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full dark:text-white dark:hover:bg-gray-900 border-gray-500 hover:bg-blue-500 hover:text-white cursor-pointer"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-white dark:bg-gray-800">
                        <DialogHeader>
                          <DialogTitle className="text-2xl dark:text-white text-black">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Image
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                            width={300}
                            height={300}
                          />
                          <p className="mb-4 text-gray-600 dark:text-gray-400">
                            {project.fullDescription}
                          </p>
                          <div>
                            <h4 className="font-semibold mb-2 dark:text-white">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-white"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            <Button asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
